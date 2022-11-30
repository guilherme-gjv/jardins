import React from "react";

export enum CloudSizes {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

export class CloudSizesValues {
  constructor(
    velocity: CloudSizes,
    top: {
      left: {
        w: number;
        h: number;
      };
      middle: {
        w: number;
        h: number;
      };
      right: {
        w: number;
        h: number;
      };
    },
    bottom: {
      w: number;
      h: number;
    }
  ) {
    this.velocity = velocity;
    this.bottom = bottom;
    this.top = top;
  }

  velocity: CloudSizes;
  top: {
    left: {
      w: number;
      h: number;
    };
    middle: {
      w: number;
      h: number;
    };
    right: {
      w: number;
      h: number;
    };
  };
  bottom: {
    w: number;
    h: number;
  };
}

const cloudSizeSMALL = new CloudSizesValues(
  CloudSizes.SMALL,
  {
    left: {
      w: 0,
      h: 2,
    },
    middle: {
      w: 24,
      h: 9,
    },
    right: {
      w: 6,
      h: 5,
    },
  },
  {
    w: 32,
    h: 10,
  }
);

const cloudSizeLARGE = new CloudSizesValues(
  CloudSizes.LARGE,
  {
    left: {
      w: 28,
      h: 5,
    },
    middle: {
      w: 24,
      h: 10,
    },
    right: {
      w: 24,
      h: 12,
    },
  },
  {
    w: 64,
    h: 16,
  }
);

const cloudSizeMEDIUM = new CloudSizesValues(
  CloudSizes.MEDIUM,
  {
    left: {
      w: 14,
      h: 5,
    },
    middle: {
      w: 24,
      h: 10,
    },
    right: {
      w: 12,
      h: 10,
    },
  },
  {
    w: 52,
    h: 16,
  }
);

export interface ICloudProps {
  size: CloudSizes;
}

const Cloud: React.FC<ICloudProps> = ({ size }) => {
  let sizes = cloudSizeMEDIUM;
  console.log(sizes.top.left.h);
  if (size === CloudSizes.SMALL) {
    sizes = cloudSizeSMALL;
  } else if (size === CloudSizes.LARGE) {
    sizes = cloudSizeLARGE;
  }
  return (
    <div
      className={`opacity-90 absolute h-52 bg-red-500 flex flex-col align-middle justify-center DESATIVEcloudAnimation-${size.toString()}`}
    >
      <div
        className={`bg-yellow-500 h-10 flex flex-row w-${sizes.bottom.w} items-end`}
      >
        <div className={`w-20 h-10 rounded-tl-full bg-white`}></div>
        <div
          className={`w-${sizes.top.middle.w} h-${sizes.top.middle.h} rounded-t-3xl  bg-white`}
        ></div>
        <div
          className={`w-${sizes.top.right.w} h-${sizes.top.right.h} rounded-t-full bg-transparent`}
        ></div>
      </div>
      <div
        className={`w-${sizes.bottom.w} h-${sizes.bottom.h} rounded-b-full rounded-r-full bg-white`}
      ></div>
    </div>
  );
};

export default Cloud;
