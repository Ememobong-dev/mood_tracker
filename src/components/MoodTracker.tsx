'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';



const data = [
  { date: 'Mar 31', hours: 5, mood: '😞' },
  { date: 'Apr 02', hours: 8, mood: '😊' },
  { date: 'Apr 04', hours: 3, mood: '😢' },
  { date: 'Apr 06', hours: 6, mood: '😟' },
  { date: 'Apr 07', hours: 8, mood: '😊' },
  { date: 'Apr 09', hours: 9, mood: '😁' },
  { date: 'Apr 10', hours: 4, mood: '😴' },
  { date: 'Apr 12', hours: 6, mood: '😟' },
  { date: 'Apr 13', hours: 8, mood: '😊' },
  { date: 'Apr 14', hours: 3, mood: '😢' },
  { date: 'Apr 15', hours: 9, mood: '😁' },
];

const getBarColor = (hours: number) => {
  if (hours >= 9) return '#FFB347'; // orange
  if (hours >= 7) return '#8BC34A'; // green
  if (hours >= 5) return '#64B5F6'; // blue
  if (hours >= 3) return '#B39DDB'; // purple
  return '#F06292'; // red
};

export default function MoodSleepChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis domain={[0, 10]} />
        <Tooltip content={({ active, payload }) => {
          if (active && payload?.length) {
            return (
              <div className="bg-white p-2 rounded shadow text-sm">
                <p>Date: {payload[0].payload.date}</p>
                <p>Sleep: {payload[0].payload.hours} hrs</p>
                <p>Mood: {payload[0].payload.mood}</p>
              </div>
            );
          }
          return null;
        }} />
        <Bar dataKey="hours" radius={[10, 10, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={index} fill={getBarColor(entry.hours)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
