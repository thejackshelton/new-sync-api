import { component$, $sync } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div style={{ height: "2000px" }}></div>
      <button
        onKeyDown$={$sync((e: KeyboardEvent) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
          }
        })}
        style={{
          display: "block",
          margin: "auto",
        }}
        onClick$={() => alert("hi!")}
      >
        I say hi!
      </button>
      <div style={{ height: "1500px" }}></div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
