import React from "react"
import UsingForInLabelAndAriaLabelledByInInput from "../../organisms/form-with-multiple-inputs/for-in-label-and-aria-labelledby-in-input"
import UsingForInLabelAndIdInInput from "../../organisms/form-with-multiple-inputs/for-in-label-and-id-in-input"
import UsingIdInLabelAndAriaLabelledByInInput from "../../organisms/form-with-multiple-inputs/id-in-label-and-aria-labelledby-in-input"

const InputArrayMusings = () => {

    return (
        <article>
            <h1>A11y for multi-line inputs</h1>

            <h2>TL:DR</h2>
            <div>
                How to provide accessibility to multiple elements listed under the same label?
            </div>
            <div>
                On the label use id to tag the objects and on those add the attribute aria-labelledby.
            </div>

            <h2>Tell me why</h2>
            <div>
                When you are collecting multiple pieces of information and all of them are connected to the same group - in HTML words, multiple inputs under the same label - the plain  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" target="_blank" rel="noreferrer">MDN's recipe for inputs</a> will not give you the best accessibility experience.

                Let's see why.
            </div>

            <h3>Using for (in the label) and id (in the input)</h3>

            <div>
                It is good practice to have the inputs labelled. This will ensure that screen readers will read the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label" target="_blank" rel="noreferrer">label</a> when the input is focused and vice versa - by clicking the label you will be focused towards the labelled control it refeers to.

                One downside of using the for attribute in labels is that it will only have one labelled control associated with it - the first element with an id matching the value of the for attribute.
            </div>

            <UsingForInLabelAndIdInInput />


            <div>
                Using Firefox to "Inspect Accessibility Properties", the form will show 2 warnings informing that "Form elements should have a visible label text".
                Bare in mind that the form is fully functional and it correctly collects the inputs provided by the user, as you can confirm by clicking the Go! button.
                The relations property list shows an important hint towards solving the warnings - the "labelled by" entry. For the first input it correcly shows the text provided by the label.

                How can we solve these warnings?
            </div>


            <h3>Using for (in the label) and aria-labelledby (in the input)</h3>

            <div>
                The <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">aria-labelledby attribute</a> is a good way to establish a relation between any object and its label, in this case, the input field.
                However, using the combination of for and aria-labelledby will render a functional, but inaccessible form., as it can be seen from the accessibility properties of the form.
            </div>

            <UsingForInLabelAndAriaLabelledByInInput />

            <h3>Using id (in the label) and aria-labelledby (in the input)</h3>

            <div>
                A readthrough on the examples from the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">aria-labelledby page</a> shows that the attribute to be used on the label is the "id" and not for.
                This combination will give us full accessibility on our form.
            </div>

            <UsingIdInLabelAndAriaLabelledByInInput />
        </article>
    )
}
export default InputArrayMusings
