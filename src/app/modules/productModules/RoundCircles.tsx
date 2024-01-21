export default function RoundCircles({ circles }: any) {
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
