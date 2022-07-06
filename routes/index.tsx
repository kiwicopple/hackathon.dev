/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Countdown from "../islands/CountDown.tsx";

export default function Home() {
  const date = new Date("2022-08-20");

  return (
    <div class={tw`mx-auto max-w-screen-md p-4`}>
      <section class={tw`my-12`}>
        <h1 class={tw`text-3xl font-bold`}>hackathon.dev</h1>
        <p class={tw`my-6 text-lg`}>
          The world's best developer tools, running the{" "}
          <strong>world's largest hackathon</strong>.
        </p>
        <p>
          Starting: 20 August 2022 (
          <Countdown target={date.toISOString()} />
          ).
        </p>
      </section>
      <section class={tw`my-12`}>
        <h2 class={tw`text-2xl font-medium`}>FAQ</h2>
        <div class={tw`my-4`}>
          <h3 class={tw`font-medium`}>Can I apply to be a sponsor?</h3>
          <p>
            You cannot. You can only be invited to sponsor this event by
            offering a great Developer Tool, which developers can leverage
            during the hackathon.
          </p>
        </div>
        <div class={tw`my-4`}>
          <h3 class={tw`font-medium`}>What are the prizes?</h3>
          <p>
            Each sponsor will offer prizes which you can use to build your
            hackathon project into a scalable business.
          </p>
        </div>
        <div class={tw`my-4`}>
          <h3 class={tw`font-medium`}>
            Which companies are sponsoring the hackathon?
          </h3>
          <p>Coming soon.</p>
        </div>
        <div class={tw`my-4`}>
          <h3 class={tw`font-medium`}>Who is judging?</h3>
          <p>Coming soon.</p>
        </div>
      </section>
    </div>
  );
}
