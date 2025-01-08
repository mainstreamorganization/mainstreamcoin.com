import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgMcoinlogo from '~/media/mcoinlogo.webp?jsx';

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <ImgMcoinlogo 
        alt="Mainstream Coin Logo" 
        class={styles.logo}
      />
      <h3>
        To Have <span class="highlight">Mainstream Coin</span>,
        <br />
        We Need <span class="highlight">Mainstream Token</span> First
      </h3>
      <div class={styles["button-group"]}>
        <a
          href="https://mainstreamtoken.com"
          target="_blank"
          rel="noopener noreferrer"
          class="button button-gold"
        >
          <strong>Visit Mainstream Token Website </strong>
        </a>
      </div>
    </div>
  );
});
