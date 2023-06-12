import React from "react";

const AccordionItem = ({ open, toggle, title, desc }) => {
    return (
      <div class="w-full pt-6">
        <dt class="w-full text-lg">
          <button
            class="flex items-start justify-between w-full text-left text-gray-400"
            id="headlessui-disclosure-button-11"
            type="button"
            aria-expanded="true"
            aria-controls="headlessui-disclosure-panel-12"
            onClick={toggle}
          >
            <span class="font-medium text-gray-900">{title}</span>
            <span class="flex items-center ml-6 h-7">
              <span class="text-primary font-normal text-2xl">{open ? '-' : '+'}</span>
            </span>
          </button>
        </dt>
        {open ? (
            <dd class="pr-12 mt-2" id="headlessui-disclosure-panel-12" >
          <p class="text-base text-gray-700">
            <div>
              {desc}
            </div>
          </p>
        </dd>
        ) : (
        <>
         
        </>
      )}
        
      </div>
    );
}

export default AccordionItem;