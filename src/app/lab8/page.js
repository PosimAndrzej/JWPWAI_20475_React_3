"use client"
import { StrictMode } from "react";
import Zad1_good from "./zad1_good";
import Zad1_bad from "./zad1_bad";
import HandleClick from "./handleClick";
import HandleMouseOver from "./handleMouseOver";
import ShowImage from "./showImage";
import LoadDataFromJson from "./loadDataFromJson";
import UploadFile from "./uploadFile";
import ChangeStyle from "./changeStyle";

export default function Home() {
  return (
    <div>
      <h1>Zad1</h1>
      <h2>Poprawna wersja</h2>
      <StrictMode>
        <Zad1_good/>
      </StrictMode>
      <h2>Niepoprawna wersja</h2>
      <StrictMode>
        <Zad1_bad/>
      </StrictMode>
      <h1>Zad2</h1>
      <HandleClick />
      <HandleMouseOver />
      <ShowImage />
      <LoadDataFromJson />
      <UploadFile />
      <ChangeStyle />
    </div>
  );
}
