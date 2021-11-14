

export default function(to, from, savedPosition) {
      if (savedPosition) {
        const { x, y } = savedPosition;
        let scrollY, winInnerHieght;

        const interval = setInterval(() => {
          scrollY = window.scrollY;
          winInnerHieght = document.body.clientHeight;
          if (y <= winInnerHieght) {
            window.scrollTo({
              top: y,
              left: x,
              behavior: "smooth" });

            if (scrollY <= y + 150 && scrollY >= y - 150) {
              clearInterval(interval);
            }
          }
        }, 500);

        return setTimeout(() => {
          clearInterval(interval);
          return savedPosition;
        }, 30000);
      } else {
        return { x: 0, y: 0 };
      }
    }
