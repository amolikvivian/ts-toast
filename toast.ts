type ToastOptions = {
  message: string;
  variant?: string;
  duration?: number;
};

let currentToast: HTMLDivElement | null = null;

export function showToast(options: ToastOptions): void {
  const { message, variant = "success", duration = 2000 } = options;

  if (currentToast) {
    document.body.removeChild(currentToast);
    currentToast = null;
  }

  const toastElement = document.createElement("div");
  toastElement.classList.add("toast", `toast--${variant}`);
  toastElement.innerText = message;
  document.body.appendChild(toastElement);

  currentToast = toastElement;

  setTimeout(() => {
    if (currentToast === toastElement) {
      document.body.removeChild(toastElement);
      currentToast = null;
    }
  }, duration);
}
