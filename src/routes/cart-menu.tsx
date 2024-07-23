import { Cart } from "./cart/cart";
import styles from "./cart-menu.module.css";

type CartMenuProps = {
  isVisible: boolean;
  onToggleCart: React.MouseEventHandler<HTMLElement>;
};

export function CartMenu({
  isVisible,
  onToggleCart,
}: CartMenuProps): React.ReactElement {
  return (
    <div className={`${styles.cartMenu} ${isVisible ? styles.visible : ""}`}>
      <div
        className={`${styles.sidebarBg} ${isVisible ? styles.visible : ""}`}
        onClick={onToggleCart}
      ></div>
      <aside className={`${styles.sidebar} ${isVisible ? styles.visible : ""}`}>
        <button onClick={onToggleCart}>x</button>
        <Cart />
      </aside>
    </div>
  );
}
