import { Navbar } from "@/components/Navbar";
import { Col, Row } from "antd";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-16 justify-center items-center pt-40">
        <div>
          <p className="text-2xl text-center font-semibold text-blue-950">
            Hello, Lisa!
          </p>
          <h2 className="text-indigo-800 font-bold mt-8 text-center text-5xl">
            How are you feeling today?
          </h2>
          <p className="text-center font-semibold text-gray-500 mt-3">
            Monday, April 12th, 2025
          </p>
        </div>
        <div>
          <button className="bg-blue-800 py-3 px-10 text-white rounded-lg">
            Log today&apos;s mood
          </button>
        </div>
      </div>
      <div className="mt-16 px-28">
        <Row>
          <Col xs={8}>
            <div className="bg-white p-4 rounded-lg border border-white/50 flex flex-col gap-5">
              <div>
                <div className="flex gap-2 items-center">
                  <p className="text-4xl">Average Mood</p>
                  <p>(Last 5 check-ins)</p>
                </div>
                <div className="flex flex-col justify-center p-4 rounded-lg w-full bg-blue-300">
                  <p className="text-blue-950">Neutral</p>
                  <p>Same as previous 5 check-ins</p>
                </div>
              </div>

              <div>
                <div className="flex gap-2 items-center">
                  <p className="text-4xl">Average Sleep</p>
                  <p>(Last 5 check-ins)</p>
                </div>
                 <div className="flex flex-col justify-center p-4 rounded-lg w-full bg-blue-800">
                  <p className="text-white">5-6 Hours</p>
                  <p>Increase from the previous 5 check-ins</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={16}>
            <div className="bg-white p-4 rounded-lg border border-white/50">
            <h3>Moods and sleep trends</h3>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
