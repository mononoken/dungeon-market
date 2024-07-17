export function Home() {
  return (
    <div className={"container"}>
      <h1>
        Welcome to <em>Dungeon Market!</em>
      </h1>
      <p>
        Dungeon Market is an implementation of a cart system using React, React
        Router, and TypeScript. That's all it needs! I use localStorage to
        persist your cart, so you can leave the page and come back to find your
        monsters still in your cart.
      </p>
      <p>
        Just another store with a cart isn't too exciting to me. After getting
        the UI in cleaner shape, I have plans to evolve Dungeon Market into an
        app for building scenarios for D{"&"}D adventures. In a way, you can
        think of such an app as just a system of multiple carts!
      </p>
    </div>
  );
}
