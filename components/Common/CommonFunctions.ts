import { Dispatch, SetStateAction } from "react";
import { User, UserData } from "../../lib/db";

export type ReturnResult<T> = {
  result: T;
  error: string;
  code: number;
};

export const convertToBase64 = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export function getName(setName: Dispatch<SetStateAction<string>>) {
  fetch("api/name")
    .then((res) => res.json())
    .then((data: string) => {
      setName(data ?? "");
    })
    .catch((error) => {
      setName(error);
    });
}
export function getNames(setNamesList: Dispatch<SetStateAction<UserData[]>>) {
  fetch("api/names")
    .then((res) => res.json())
    .then((data: ReturnResult<UserData[]>) => {
      setNamesList(data?.result ?? []);
    })
    .catch((error) => {
      console.error(error);
    });
}
