import MoodSleepChart from "@/components/MoodTracker";
import { Navbar } from "@/components/Navbar";
import { ArrowRightOutlined } from "@ant-design/icons";
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
        <Row gutter={[32, 32]}>
          <Col xs={8}>
            <div className="bg-white p-4 h-full rounded-lg border border-white/50 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex gap-1 items-center">
                  <p className="text-2xl text-blue-950 font-semibold">
                    Average Mood
                  </p>
                  <p className="text-gray-700 font-medium">
                    (Last 5 check-ins)
                  </p>
                </div>
                <div className="flex flex-col gap-3 justify-center h-[150px] p-4 rounded-2xl w-full bg-blue-300">
                  <p className="text-blue-950 font-semibold text-2xl">
                    Neutral
                  </p>
                  <div className="flex gap-2 items-center">
                    <span>
                      <ArrowRightOutlined />
                    </span>
                    <p className="text-blue-950/80 font-medium">
                      Same as previous 5 check-ins
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex gap-1 items-center">
                  <p className="text-2xl text-blue-950 font-semibold">
                    Average Sleep
                  </p>
                  <p className="text-gray-700 font-medium">
                    (Last 5 check-ins)
                  </p>
                </div>
                <div className="flex flex-col gap-3 justify-center h-[150px] p-4 rounded-2xl w-full bg-blue-800">
                  <p className="text-white font-semibold text-2xl">5-6 Hours</p>
                  <div className="flex gap-2 items-center">
                    <span
                      style={{
                        transform: "rotate(-45deg)",
                        display: "inline-block",
                      }}
                    >
                      <ArrowRightOutlined style={{ color: "white", opacity: "50%" }} />
                    </span>
                    <p className="text-white/50 font-medium">
                      Increase from the previous 5 check-ins
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={16}>
            <div className="bg-white p-4 h-full rounded-lg border border-white/50">
              <h3>Moods and sleep trends</h3>
              <MoodSleepChart />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
