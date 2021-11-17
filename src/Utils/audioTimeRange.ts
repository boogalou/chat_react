export const audioTimeRange = (time: number | undefined) => {
  if (time !== undefined) {
    const min = Math.floor(time / 60);
    const sec = +(time % 60).toFixed();
    return `${ min < 10 ? '0' : '' }${ min }:${ sec < 10 ? '0' : '' }${ sec }`;
  }
};

