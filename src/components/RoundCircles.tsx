export default function RoundCircles({ circles }: any) {
  console.log(circles);
  return (
    <>
      {circles.map((circle: { bgColor: string }, index: number) => (
        <div
          className={`w-[30px] h-[30px] rounded-full bg-${circle.bgColor}`}
          key={index}
        />
      ))}
    </>
  );
}
