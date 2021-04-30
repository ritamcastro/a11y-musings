import React, { useState } from "react"
import UsingForInLabelAndIdInInput from "../../organisms/form-with-multiple-inputs/for-in-label-and-id-in-input"

const InputArrayMusings = () => {



    return (
        <article>
            <h1>A11y for multi-line inputs</h1>

            <div>
                When you are collecting multiple pieces of information and all of them are connected to the same group - in HTML words, multiple inputs under the same label - the plain  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" target="_blank">MDN's recipe for inputs</a> will not give you the best accessibility experience.

                Let's see why.
            </div>

            <h2>Using for (in the label) and id (in the input)</h2>

            <div>
                It is good practice to have the inputs labelled. This will ensure that screen readers will read the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label" target="_blank">label</a> when the input is focused and vice versa - by clicking the label you will be focused towards the labelled control it refeers to.

                One downside of using the for attribute in labels is that it will only have one labelled control associated with it - the first element with an id matching the value of the for attribute.
            </div>

            <UsingForInLabelAndIdInInput />


            <div>
                Using Firefox to "Inspect Cccessibility Properties", the form will show 2 warnings informing that "Form elements should have a visible label text".
                Bare in mind that the form is fully functional and it correctly collects the inputs provided by the user, as you can confirm by clicking the Go! button.
                The relations property list shows an important hint towards solving the warnings - the "labelled by" entry. For the first input it correcly shows the text provided by the label.

                How can we solve these warnings?
            </div>


            <h2>Using for (in the label) and aria-labelledby (in the input)</h2>

            <div>
                Using Chrome to inspect the Accessibility properties will give a hint on the
            </div>
            {/* https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute */}

        </article>
    )
}
export default InputArrayMusings
