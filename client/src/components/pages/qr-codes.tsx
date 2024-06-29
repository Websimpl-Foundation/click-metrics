import React, { useState } from "react";
import { message } from "antd";
import defaultQr from "../../assets/qrcode.png";
import { ImageFormatType, QrPropsType } from "../../types/qr-code";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dropdown } from "@/components/ui/dropdown";

const Qrcode: React.FC = () => {
  const [img, setImg] = useState<ImageFormatType>({
    png: defaultQr,
    jpg: defaultQr,
    jpeg: defaultQr,
    svg: defaultQr,
  });
  const [QrProps, setQrProps] = useState<QrPropsType>({
    qrinput: "",
    background: "#ffffff",
    foreground: "#000000",
    margin: 1,
    format: "png",
    size: "150x150",
  });
  const [inputCharacters, setInputCharacters] = useState<number>(0);

  const generateQR = async () => {
    try {
      if (QrProps.qrinput.trim() === "") {
        message.error("Input cannot be empty");
        return;
      }
      const formats: (keyof ImageFormatType)[] = ["png", "jpg", "jpeg", "svg"];

      let images: ImageFormatType = {
        png: "",
        jpg: "",
        jpeg: "",
        svg: "",
      };

      for (let format of formats) {
        images[format] = `https://api.qrserver.com/v1/create-qr-code/?size=${
          QrProps.size
        }&data=${encodeURIComponent(QrProps.qrinput)}&format=${format}&qzone=${
          QrProps.margin
        }&color=${QrProps.foreground.substring(
          1
        )}&bgcolor=${QrProps.background.substring(1)}`;
      }
      setImg(images);

      message.success("QR Code Generated Successfully");
    } catch (error) {
      console.error(error);
      message.error("Try Again");
    }
  };

  const click = () => {
    if (img.png !== defaultQr) {
      window.open(`/qr/${QrProps.qrinput}`, "_blank");
    }
  };

  const downloadQR = (imgToDownload: string) => {
    fetch(imgToDownload)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `qrcode.${QrProps.format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        message.success("Download Successful");
      })
      .catch((error) => {
        console.error(error);
        message.error("Download Failed");
      });
  };

  return (
    <>
      <div className="mx-auto p-4 w-[95%] dark:bg-[#0D203D] dark:text-white">
        <h1 className="text-3xl font-bold mb-4">QR CODE GENERATOR</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Generate a customized QR code by entering your website, text, or any
          URL below. Adjust colors, size, and format to suit your needs, then
          download your QR code instantly for easy sharing.
        </p>
        <div className="flex flex-wrap w-full justify-center">
          <div className="w-[50%] min-w-[375px]">
            <div className="mt-6">
              <Label htmlFor="url" className="block text-lg font-semibold">
                <span className="inline-block mr-2">🔗</span>Enter Your Url
              </Label>
              <Input
                id="url"
                type="text"
                placeholder="Enter any text or website Url"
                className="w-full p-2 border-2 rounded my-2 bg-white"
                value={QrProps.qrinput}
                onChange={(e) => {
                  setQrProps({ ...QrProps, qrinput: e.target.value });
                  setInputCharacters(e.target.value.length);
                }}
                maxLength={1000}
              />
              <p
                className={`text-right text-sm ${
                  inputCharacters == 1000 ? "text-[#df3d3d]" : "text-[#969696]"
                }`}
              >
                {inputCharacters}/1000
              </p>
            </div>
            <div className="mt-6">
              <Label className="block text-lg font-semibold">
                <span className="inline-block mr-2">🖌️</span>Select Color
              </Label>
              <div className="flex space-x-4 mt-2">
                <div className="w-[50%]">
                  <Label htmlFor="background">Background</Label>
                  <div
                    style={{ backgroundColor: `${QrProps.background}` }}
                    className={`border-2 rounded-md`}
                  >
                    <Input
                      id="background"
                      type="color"
                      value={QrProps.background}
                      onChange={(e) => {
                        setQrProps({
                          ...QrProps,
                          background: e.target.value,
                        });
                      }}
                      className="w-full rounded opacity-0"
                    />
                  </div>
                  <p className="text-right">{QrProps.background}</p>
                </div>
                <div className="w-[50%]">
                    <Label htmlFor="foreground">Foreground</Label>
                  <div
                    style={{ backgroundColor: `${QrProps.foreground}` }}
                    className={`border-2 rounded-md`}
                  >
                    <Input
                      id="foreground"
                      type="color"
                      value={QrProps.foreground}
                      onChange={(e) => {
                        setQrProps({
                          ...QrProps,
                          foreground: e.target.value,
                        });
                      }}
                      className="w-full rounded opacity-0"
                    />
                  </div>
                  <p className="text-right">{QrProps.foreground}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <Label htmlFor="size" className="block text-lg font-semibold">
                  Select Size
                </Label>
                <Dropdown
                  options={["150x150", "200x200", 
                    "300x300", "400x400", 
                    "500x500", "600x600", 
                    "700x700", "800x800", 
                    "900x900", "1000x1000"]}
                  value={QrProps.size}
                  onChange={(value) => setQrProps({ ...QrProps, size: value })}
                  className="w-full p-2 border-2 rounded bg-white"
                />
              </div>
              <div className="w-full md:w-1/2">
                <Label htmlFor="margin" className="block text-lg font-semibold">
                  Set Margin
                </Label>
                <Dropdown
                  options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                  value={QrProps.margin.toString()}
                  onChange={(value) => setQrProps({ ...QrProps, margin: parseInt(value) })}
                  className="w-full p-2 border-2 rounded bg-white"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 w-[50%] min-w-[375px] flex flex-col items-center justify-between">
            <div className="flex flex-col items-center gap-4">
               <Button onClick={generateQR} className="px-4 text-[21px] py-2 bg-blue-500 text-white rounded">
                  Generate QR Code
               </Button>
              {img.png && (
                <img
                  src={img.png}
                  className="qr-code-image cursor-pointer w-[200px] mt-8 mb-4"
                  onClick={click}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = defaultQr;
                  }}
                  alt="QR Code"
                />
              )}

              <Button
                 onClick={() => downloadQR(img[QrProps.format as keyof ImageFormatType])}
                 className="w-[200px] flex gap-2 items-center justify-center bg-[#20954b] text-white px-4 py-2 rounded"
              >
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 48 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9103 28.5125L33.3303 16.7375H26.2653V0.252441H21.5553V16.7375H14.4902L23.9103 28.5125Z"
                    fill="white"
                  />
                  <path
                    d="M42.7495 33.2223H5.06939V16.7373H0.359375V33.2223C0.359375 35.8199 2.47181 37.9324 5.06939 37.9324H42.7495C45.347 37.9324 47.4595 35.8199 47.4595 33.2223V16.7373H42.7495V33.2223Z"
                    fill="white"
                  />
                </svg>
                Download
              </Button>

              <div className="flex space-x-2 mt-2">
                <Button
                   variant={QrProps.format === "png" ? "default" : "outline"}
                   onClick={() => {
                     setQrProps({ ...QrProps, format: "png" });
                   }}
                   className="px-2 py-1 border rounded"
                >
                  png
                </Button>
                <Button
                   variant={QrProps.format === "jpeg" ? "default" : "outline"}
                   onClick={() => {
                     setQrProps({ ...QrProps, format: "jpeg" });
                   }}
                   className="px-2 py-1 border rounded"
                >
                   jpeg
                </Button>
                <Button
                   variant={QrProps.format === "svg" ? "default" : "outline"}
                   onClick={() => {
                     setQrProps({ ...QrProps, format: "svg" });
                   }}
                   className="px-2 py-1 border rounded"
                >
                   svg
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qrcode;
