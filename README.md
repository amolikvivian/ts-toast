# Toast - as basic as it gets.
A basic vanilla JS toast function, with Typescript support. Using TailwindCSS for styles

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

Was looking for methods to add toasts/snackbars to projects without having to use third party libraries or create custom hooks to inject toasts.
Developed something very vanilla, but works just as effectively. 

Using a custom hook to trigger the toast worked well, until I needed to trigger it from my redux files or axios interceptors.
Tried react-toastify, but was running into Typescript errors that I couldn't seem to work around (would be happy to know any existing solutions).

### Advantages I found using this method
1. No use of custom hooks, making it independent of React FCs, accessible from js/jsx/ts/tsx files.
2. No third party dependencies.

### The only downside to this approach would the Javascript verbose that comes with it.

Attaching below a to-do list, for anyone who would like to contribute.

- [ ] Add a subtext to the toast along with title, for better UI.
- [ ] Add functionality to stack toasts if multiple are triggered together. (Current implementation removes the previous toast)
- [ ] Add a `x` button to close toast on click.

Usage : 

```tsx
import { showToast } from "utils/toast";
.
.
.

export default App() {

  const handleToast = () => {
    showToast({
      message: "Toasting up!,
      variant: "success" // "danger" | "warning" | "info"
    });
  }

  return (
    <button onClick={()=>handleToast()}>Demo toast</button>
  );
}

```

Any additions, modifications are welcome. Feel free to contribute.
