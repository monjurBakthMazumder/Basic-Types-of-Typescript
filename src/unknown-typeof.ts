{
  // unknown typeof
  const getSpeedMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed if ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [valueInNumber, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(valueInNumber) * 1000) / 3600;
      console.log(`The speed if ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };

  getSpeedMeterPerSecond(1000);
  getSpeedMeterPerSecond("1000 ms^-1");
}
