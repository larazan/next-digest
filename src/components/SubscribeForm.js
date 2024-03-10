import React from "react";
import Link from "next/link";

const SubscribeForm = () => {
  return (
    <aside className="py-8 md:py-16 bg-gray-50 lg:py-20 dark:bg-gray-800 border-t border-b border-gray-100 dark:border-gray-700">
      <div className="px-4 mx-auto max-w-8xl">
        <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 md:font-extrabold lg:leading-none dark:text-white md:text-center lg:mb-7">
          Sign up for our newsletter
        </h2>
        <p className="mb-4 text-base leading-tight md:leading-normal text-gray-500 md:mb-6 dark:text-gray-400 md:text-center md:text-xl lg:px-20 xl:px-56">
          Sign up for our newsletter and you will be among the first to find out
          about new articles, quotes, riddles, and more.
        </p>
        <div className="mb-4">
          <form
            action="https://app.convertkit.com/forms/4692392/subscriptions"
            className="seva-form formkit-form flex max-w-xl md:mx-auto"
            method="post"
            data-sv-form="4692392"
            data-uid="344e3b5c48"
            data-format="inline"
            data-version="5"
            data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
            min-width="400 500 600 700 800"
          >
            <div className="w-full" data-style="clean">
              <label for="member_email" className="hidden">
                Email address
              </label>
              <div className="relative h-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  type="email"
                  id="member_email"
                  name="email_address"
                  className="block w-full px-3 py-4 pl-11 text-base text-gray-900 bg-white border border-gray-200 rounded-l-xl formkit-input focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required=""
                />
              </div>
            </div>
            <div>
              <input
                type="submit"
                data-element="submit"
                id="member_submit"
                className="formkit-submit formkit-submit w-full px-4 py-4 text-base font-medium text-center text-white bg-blue-600 border border-blue-600 cursor-pointer rounded-r-xl formkit-submit hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                value="Subscribe"
              />
            </div>
          </form>
        </div>
        <p className="text-sm text-gray-500 md:text-center dark:text-gray-400 font-normal">
          By subscribing, you agree with{" "}
          <a
            rel="nofollow noopener noreferrer"
            className="text-blue-600 dark-text-blue-400 hover:underline"
            href="https://convertkit.com/terms"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            className="text-blue-600 dark-text-blue-400 hover:underline"
            rel="nofollow noopener noreferrer"
            href="https://convertkit.com/privacy"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </aside>
  );
};

export default SubscribeForm;
