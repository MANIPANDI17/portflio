// src/components/Chart.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 800 },
  { name: 'Mar', users: 600 },
  {name:'Apr',users:700},
  {name:'May',users:300},
  {name:'June',users:950},
  {name:'July',users:979},
  
];

function Chart() {
  return (
    <ResponsiveContainer width="50%" height={200} >
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#8884d9" />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default Chart;
