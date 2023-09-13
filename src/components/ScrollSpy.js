import React from "react";

function ScrollSpy() {
  return (
    <div className="text-black">
      {/* <!-- Scrollspy --> */}
      <div id="scrollspy1" class="sticky-top pl-3 text-sm">
        <ul data-te-nav-list-ref>
          <li class="py-1">
            <a
              data-te-nav-link-ref
              data-te-nav-link-active
              class="text-neutral-600 dark:text-neutral-200 bg-transparent px-[5px] shadow-none"
              href="#example-1"
            >
              Team
            </a>
          </li>
          <li class="py-1">
            <a
              data-te-nav-link-ref
              class="text-neutral-600 dark:text-neutral-200 bg-transparent px-[5px] shadow-none"
              href="#example-2"
            >
              Section 2
            </a>
          </li>
          <li class="py-1">
            <a
              data-te-nav-link-ref
              class="text-neutral-600 dark:text-neutral-200 bg-transparent px-[5px] shadow-none"
              href="#example-3"
            >
              Section 3
            </a>
            <ul data-te-nav-list-ref class="pl-3">
              <li class="py-1">
                <a
                  data-te-nav-link-ref
                  class="text-neutral-600 dark:text-neutral-200 bg-transparent px-[5px] shadow-none"
                  href="#example-sub-A"
                >
                  Subsection A
                </a>
              </li>
              <li>
                <a
                  data-te-nav-link-ref
                  class="text-neutral-600 dark:text-neutral-200 bg-transparent px-[5px] shadow-none"
                  href="#example-sub-B"
                >
                  Subsection B
                </a>
              </li>
            </ul>
          </li>
          <li class="py-1">
            <a
              data-te-nav-link-ref
              class="text-neutral-600 dark:text-neutral-200 bg-transparent px-[5px] shadow-none"
              href="#example-4"
            >
              Section 4
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- Scrollspy --> */}
    </div>
  );
}

export default ScrollSpy;
