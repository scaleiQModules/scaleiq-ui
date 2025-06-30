import React from 'react';
import { useTheme } from '@scaleiq/scaleiq-ui';

interface RingChartProps {
  percentages: number[]; // Un array de porcentajes
  colors?: string[]; // Colores opcionales para cada segmento
  size?: number; // Tamaño del gráfico
  strokeWidth?: number; // Ancho del trazo
  innerText?: string; // Texto en el centro del gráfico
}

const RingChart: React.FC<RingChartProps> = ({
  percentages,
  colors = ['#4CAF50', '#2196F3', '#FFC107', '#FF5722'], // Colores por defecto
  size = 200, // Tamaño por defecto
  strokeWidth = 20, // Ancho del trazo por defecto
  innerText = '', // Texto opcional en el centro del gráfico
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let totalOffset = 0;

  const { darkMode } = useTheme();

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(221, 221, 221, 0.1)"
        strokeWidth={strokeWidth}
      />
      {percentages.map((percentage, index) => {
        const strokeDasharray = `${
          (percentage / 100) * circumference
        } ${circumference}`;
        const strokeDashoffset = totalOffset;
        totalOffset -= (percentage / 100) * circumference;

        return (
          <circle
            key={index}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={colors[index % colors.length]}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="butt"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        );
      })}
      {/* Texto en el centro */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="20px"
        fontWeight="bold"
        fill={darkMode ? '#FFF' : '#000'}
      >
        {innerText}
      </text>
    </svg>
  );
};

export default RingChart;
