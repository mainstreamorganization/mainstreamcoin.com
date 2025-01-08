import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <h3>
        To Have <span class="highlight">Mainstream Coin</span>,
        <br />
        We Need <span class="highlight">Mainstream Token</span> First
      </h3>
      <p>Visit <a href="https://mainstreamtoken.com">mainstreamtoken.com</a></p>
      <div class={styles["button-group"]}>
        <a
          href="https://mainstreamtoken.com"
          target="_blank"
          rel="noopener noreferrer"
          class="button button-gold"
        >
          Visit Mainstream Token Website
        </a>
      </div>
    </div>
  );
});
