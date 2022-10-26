import { useMemo } from "react";
import Swal from "sweetalert2";

const useToast = () => {
  const toast = useMemo(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    return Toast;
  }, []);
  return toast;
};

export default useToast;
