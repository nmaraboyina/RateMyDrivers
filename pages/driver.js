import { connectToDatabase } from "./api/db";
import axios from "axios";
import { useEffect, useState } from 'react';
import jsonData from '../data.json'

export default function PrintData({ data }) {

  


  return (
    <div className="bg-slate-100 text-black w-screen h-filln-">
      <div className="h-20 bg-red-600 shadow-md mb-5">
        <div className="h-full flex flex-wrap items-center text-white ml-10">
          <h1 className="text-2xl">Rate My Drivers</h1>
        </div>
      </div>

      <div className="mx-10 mt-10 bg-white px-5 py-10 rounded shadow-lg h-full lg:h-[50%]">
        <div className="flex">
          <div className="w-[80%] mb-10">
            <div className="flex">
              <div className="flex items-center justify-center">
                <div className="flex rounded h-full items-center justify-start y-auto">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28 16C28 18.1217 27.1571 20.1566 25.6569 21.6569C24.1566 23.1571 22.1217 24 20 24C17.8783 24 15.8434 23.1571 14.3431 21.6569C12.8429 20.1566 12 18.1217 12 16C12 13.8783 12.8429 11.8434 14.3431 10.3431C15.8434 8.84285 17.8783 8 20 8C22.1217 8 24.1566 8.84285 25.6569 10.3431C27.1571 11.8434 28 13.8783 28 16Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.184 39.984C8.517 39.556 0 30.772 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40C19.9087 40.0006 19.8173 40.0006 19.726 40C19.545 40 19.364 39.994 19.184 39.984ZM7.166 32.62C7.01646 32.1906 6.96557 31.733 7.01708 31.2812C7.0686 30.8294 7.22121 30.395 7.46358 30.0103C7.70595 29.6255 8.03186 29.3003 8.41712 29.0588C8.80238 28.8172 9.2371 28.6655 9.689 28.615C17.485 27.752 22.563 27.83 30.321 28.633C30.7735 28.6801 31.2093 28.8299 31.5952 29.0709C31.9811 29.3119 32.3068 29.6378 32.5477 30.0237C32.7886 30.4096 32.9383 30.8455 32.9853 31.298C33.0323 31.7505 32.9754 32.2078 32.819 32.635C36.1439 29.2709 38.006 24.7299 38 20C38 10.059 29.941 2 20 2C10.059 2 2 10.059 2 20C2 24.916 3.971 29.372 7.166 32.62Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <div className=" flex items-center justify-center h-full ml-5 ">
                <div>
                  <h3 className="text-3xl">Sushant G</h3>
                  <br />
                  <div className="flex">
                    <h3 className="text-xl font-semibold">Number of Trips: </h3>
                    <h3 className="text-xl ml-3">{jsonData.coount}</h3>
                  </div>
                </div>

                <br />
              </div>
            </div>
          </div>
          <div className="w-[20%] flex flex-wrap justify-center">
            <div className="text-center">
              <h3>{jsonData.average}</h3>
              <p className="text-4xl">
                {" "}
                {calculateLetterGrade(jsonData.average)}
              </p>
            </div>
          </div>
        </div>
        {calculateLetterGrade(jsonData.average) === "F" && (
          <button className="w-full bg-red-600 h-10 text-white rounded hover:bg-slate-100 hover:text-red-600">
            !!! Contact !!!
          </button>
        )}
      </div>

      <ul>
        {data.map((item, index) => {
          const driverName = item.manager[1].user[0];
          const history = item.manager[1].user[1].history;
          const historyCount = history.length;
          const historySum = history.reduce((total, score) => total + score, 0);
          const historyAverage =
            historyCount > 0 ? historySum / historyCount : 0;

          return (
            <div className="mx-10 mt-10 bg-white px-5 py-10 rounded shadow-lg h-full lg:h-[50%]">
              <li key={index}>
                <div className="flex">
                  <div className="w-[80%] mb-10">
                    <div className="flex">
                      <div className="flex items-center justify-center">
                        <div className="flex rounded h-full items-center justify-start y-auto">
                          <svg
                            width="60"
                            height="60"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28 16C28 18.1217 27.1571 20.1566 25.6569 21.6569C24.1566 23.1571 22.1217 24 20 24C17.8783 24 15.8434 23.1571 14.3431 21.6569C12.8429 20.1566 12 18.1217 12 16C12 13.8783 12.8429 11.8434 14.3431 10.3431C15.8434 8.84285 17.8783 8 20 8C22.1217 8 24.1566 8.84285 25.6569 10.3431C27.1571 11.8434 28 13.8783 28 16Z"
                              fill="black"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.184 39.984C8.517 39.556 0 30.772 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40C19.9087 40.0006 19.8173 40.0006 19.726 40C19.545 40 19.364 39.994 19.184 39.984ZM7.166 32.62C7.01646 32.1906 6.96557 31.733 7.01708 31.2812C7.0686 30.8294 7.22121 30.395 7.46358 30.0103C7.70595 29.6255 8.03186 29.3003 8.41712 29.0588C8.80238 28.8172 9.2371 28.6655 9.689 28.615C17.485 27.752 22.563 27.83 30.321 28.633C30.7735 28.6801 31.2093 28.8299 31.5952 29.0709C31.9811 29.3119 32.3068 29.6378 32.5477 30.0237C32.7886 30.4096 32.9383 30.8455 32.9853 31.298C33.0323 31.7505 32.9754 32.2078 32.819 32.635C36.1439 29.2709 38.006 24.7299 38 20C38 10.059 29.941 2 20 2C10.059 2 2 10.059 2 20C2 24.916 3.971 29.372 7.166 32.62Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className=" flex items-center justify-center h-full ml-5 ">
                        <div>
                          <h3 className="text-3xl">{driverName}</h3>
                          <br />
                          <div className="flex">
                            <h3 className="text-xl font-semibold">
                              Number of Trips:{" "}
                            </h3>
                            <h3 className="text-xl ml-3">{historyCount}</h3>
                          </div>
                        </div>

                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="w-[20%] flex flex-wrap justify-center">
                    <div className="text-center">
                      <h3>{historyAverage.toFixed(2)}</h3>
                      <p className="text-4xl">
                        {" "}
                        {calculateLetterGrade(historyAverage)}
                      </p>
                    </div>
                  </div>
                </div>
                {calculateLetterGrade(historyAverage) === "F" && (
                  <button className="w-full bg-red-600 h-10 text-white rounded hover:bg-slate-100 hover:text-red-600">
                    !!! Contact !!!
                  </button>
                )}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const db = await connectToDatabase();
  const collection = db.collection("information");
  const data = await collection.find({}, { projection: { _id: 0 } }).toArray();

  return {
    props: {
      data,
    },
  };
}

function calculateLetterGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

