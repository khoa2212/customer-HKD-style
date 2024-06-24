import { StatusEnum } from "../../enums/enums";

export const myCart = {
  id: "a",
  fullName: "a",
  cartItems: [
    {
      id: "1",
      product: {
        id: 1,
        attachment: [
          "https://res.cloudinary.com/dtzgqc50b/image/upload/v1718421898/products/gbrmv2c2jakwcbttlojz.png",
        ],
        rating: 0,
        name: "AVX G2 438",
        price: 500,
        sales: 5, // 5% of price
        totalReviews: 5,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nisi, ultricies nec commodo quis, efficitur ut metus. Sed semper, sem sit amet rhoncus cursus, dui tellus commodo velit, ac vestibulum turpis eros vel nunc. Integer feugiat egestas libero, et pellentesque nunc aliquam non. In eu sem a leo convallis viverra. Sed vitae luctus neque. Praesent sed urna fermentum, hendrerit tortor et, accumsan elit. Praesent ultrices leo eget elit vehicula, eget congue turpis aliquet. Morbi faucibus hendrerit turpis sed aliquam. Cras a quam ante. Nulla facilisi. Vivamus viverra, felis ut luctus vestibulum, nunc ante pulvinar turpis, non euismod ex eros.",
      },
      quantity: 2,
    },
    {
      id: "2",
      product: {
        id: 2,
        attachment: [
          "https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770330/products/wchbo34j2ienzuaaqr0i.png",
        ],
        rating: 1,
        name: "Lorem AVF L86 9061 HZ 90810 LO10931 P10313 QA",
        price: 1000,
        sales: 50, // 50% of price
        totalReviews: 5,
        status: StatusEnum.ACTIVE,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nisi, ultricies nec commodo quis, efficitur ut metus. Sed semper, sem sit amet rhoncus cursus, dui tellus commodo velit, ac vestibulum turpis eros vel nunc. Integer feugiat egestas libero, et pellentesque nunc aliquam non. In eu sem a leo convallis viverra. Sed vitae luctus neque. Praesent sed urna fermentum, hendrerit tortor et, accumsan elit. Praesent ultrices leo eget elit vehicula, eget congue turpis aliquet. Morbi faucibus hendrerit turpis sed aliquam. Cras a quam ante. Nulla facilisi. Vivamus viverra, felis ut luctus vestibulum, nunc ante pulvinar turpis, non euismod ex eros.",
      },
      quantity: 5,
    },
    {
      id: "3",
      product: {
        id: 3,
        attachment: [
          "https://res.cloudinary.com/dtzgqc50b/image/upload/v1718421895/products/ijp0ffievkup5lczfynr.png",
        ],
        rating: 2,
        name: "AVX G2 438",
        price: 200,
        sales: 99,
        totalReviews: 100,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nisi, ultricies nec commodo quis, efficitur ut metus. Sed semper, sem sit amet rhoncus cursus, dui tellus commodo velit, ac vestibulum turpis eros vel nunc. Integer feugiat egestas libero, et pellentesque nunc aliquam non. In eu sem a leo convallis viverra. Sed vitae luctus neque. Praesent sed urna fermentum, hendrerit tortor et, accumsan elit. Praesent ultrices leo eget elit vehicula, eget congue turpis aliquet. Morbi faucibus hendrerit turpis sed aliquam. Cras a quam ante. Nulla facilisi. Vivamus viverra, felis ut luctus vestibulum, nunc ante pulvinar turpis, non euismod ex eros.",
      },
      quantity: 8,
    },
    {
      id: "4",
      product: {
        id: 4,
        attachment: [
          "https://res.cloudinary.com/dtzgqc50b/image/upload/v1717770330/products/bogmggtbjryon13jbbwq.png",
        ],
        rating: 3,
        name: "AVX G2 438",
        price: 400,
        sales: 70,
        totalReviews: 99,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nisi, ultricies nec commodo quis, efficitur ut metus. Sed semper, sem sit amet rhoncus cursus, dui tellus commodo velit, ac vestibulum turpis eros vel nunc. Integer feugiat egestas libero, et pellentesque nunc aliquam non. In eu sem a leo convallis viverra. Sed vitae luctus neque. Praesent sed urna fermentum, hendrerit tortor et, accumsan elit. Praesent ultrices leo eget elit vehicula, eget congue turpis aliquet. Morbi faucibus hendrerit turpis sed aliquam. Cras a quam ante. Nulla facilisi. Vivamus viverra, felis ut luctus vestibulum, nunc ante pulvinar turpis, non euismod ex eros.",
      },
      quantity: 10,
    },
    {
      id: "5",
      product: {
        id: 5,
        attachment: [
          "https://res.cloudinary.com/dtzgqc50b/image/upload/v1718421895/products/fcuwir8uxjcemdhhbvdc.png",
        ],
        rating: 4.5,
        name: "AVX G2 438",
        price: 500,
        sales: 5,
        totalReviews: 1000,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nisi, ultricies nec commodo quis, efficitur ut metus. Sed semper, sem sit amet rhoncus cursus, dui tellus commodo velit, ac vestibulum turpis eros vel nunc. Integer feugiat egestas libero, et pellentesque nunc aliquam non. In eu sem a leo convallis viverra. Sed vitae luctus neque. Praesent sed urna fermentum, hendrerit tortor et, accumsan elit. Praesent ultrices leo eget elit vehicula, eget congue turpis aliquet. Morbi faucibus hendrerit turpis sed aliquam. Cras a quam ante. Nulla facilisi. Vivamus viverra, felis ut luctus vestibulum, nunc ante pulvinar turpis, non euismod ex eros.",
      },
      quantity: 100,
    },
  ],
};
