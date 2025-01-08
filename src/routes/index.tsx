import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "../components/starter/hero/hero";

export default component$(() => {
  return (
    <>
      <Hero />
    </>
  );
});

export const head: DocumentHead = {
  title: "Mainstream Coin",
  meta: [
    {
      name: "description",
      content: "Official Mainstream Coin Website",
    },
  ],
};
