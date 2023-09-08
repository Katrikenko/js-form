// document.querySelector('.form__button').onclick = () => {
//   const form = document.getElementById('form')

//   if (form.reportValidity()) {
//     form.submit()
//   } else {
//     form.reset()
//   }
// }

document.addEventListener('DOMContentLoaded', () => {
  //   document
  //     .querySelector('.form__button')
  //     .addEventListener('keydown', (event) => {
  //       if (event.key === 'Enter') {
  //         const button =
  //           document.querySelector('.form__button')
  //         button.click()
  //       }
  //     })

  document.querySelector('.form__button').onclick = () => {
    const form = document.getElementById('form')
    const email = document.getElementById('email')

    if (email.checkValidity()) {
      form.submit()
    } else {
      form.reset()
    }

    if (!email.checkValidity()) {
      if (email.value.length === 0) {
        email.setCustomValidity('Error. Enter the value')
      }

      if (email.value.length > 10) {
        email.setCustomValidity(
          'Error. Enter up to 10 characters',
        )
      }

      email.reportValidity()
    }
  }

  document
    .querySelectorAll('.form__button-add')
    .forEach((element) => {
      element.onclick = () => {
        // const age = document.getElementById('age')

        if (element.getAttribute('operator') === '+') {
          return age.stepUp(
            Number(element.getAttribute('value')),
          )
        } else if (
          element.getAttribute('operator') === '-'
        ) {
          return age.stepDown(
            Number(element.getAttribute('value')),
          )
        }
      }
    })

  document.querySelector('.form__button-save').onclick =
    () => {
      const value =
        document.getElementById('username').value

      if (value.length === 0) alert('There is no data')

      navigator.clipboard
        .writeText(value)
        .then(() => alert('The data is saved'))
    }

  //   document
  //     .querySelector('.form__button')
  //     .addEventListener('click', () => {
  //       alert('click')
  //     })

  //   const listener = () => {
  //     alert('click2')
  //   }

  //   document
  //     .querySelector('.form__button')
  //     .addEventListener('click', listener)

  //   document
  //     .querySelector('.form__button')
  //     .removeEventListener('click', listener)

  //   const outer = document.getElementById('outer')
  //   const inner = document.getElementById('inner')

  //   outer.addEventListener(
  //     'click',
  //     () => alert('Capture phase outer'),
  //     { capture: true },
  //   )

  //   inner.addEventListener(
  //     'click',
  //     (e) => {
  //       e.stopImmediatePropagation()
  //       alert('Capture phase inner')
  //     },
  //     { capture: true },
  //   )

  //   inner.addEventListener(
  //     'click',
  //     (e) => {
  //       alert('Capture phase inner 2')
  //     },
  //     { capture: true },
  //   )

  //   outer.addEventListener(
  //     'click',
  //     () => alert('Bubble phase outer'),
  //     { capture: false, once: true },
  //   )

  //   inner.addEventListener(
  //     'click',
  //     () => alert('Bubble phase inner'),
  //     { capture: false, once: true },
  //   )

  //========================================================

  //   document
  //     .querySelector('.form__button')
  //     .addEventListener('click', (e) => {
  //       e.preventDefault()

  //       alert(e.defaultPrevented)

  //       //   console.log(e.target)
  //       //   console.log(e.currentTarget)

  //       console.log(e.composedPath())
  //     })

  //=======================================================

  const button = document.querySelector('.form__button')

  const myEvent = new CustomEvent('myevent', {
    detail: { id: 100 },
  })

  button.addEventListener('myevent', (e) => {
    console.log(e)
  })

  button.dispatchEvent(myEvent)
})
