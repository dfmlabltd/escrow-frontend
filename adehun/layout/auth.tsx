import { PropsWithChildren } from "../interface/prop";
import AuthHeader from "../widgets/Headers/Auth";
import AuthFooter from "../widgets/Footers/Auth";
import "./css/Auth.module.css";

interface AuthLayoutProps {
  title: string;
  subtitle?: string;
}

const AuthLayout: React.FC<PropsWithChildren<AuthLayoutProps>> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="relative auth-wrapper font-adreg" id="authLogin">
      <AuthHeader />
      <main className="relative pt-8" aria-labelledby="Login Section">
        <div className="container">
          <div className="relative w-full flex justify-center">
            <div className="relative w-[30em] p-4">
              <div className="w-full">
                <div
                  className="relative flex flex-col text-center gap-1.5 text-white"
                  aria-labelledby="Header text"
                >
                  <h1 className="text-4xl font-semibold">{title}</h1>
                  {subtitle ? (
                    <p className="text-sm md:text-base">{subtitle}</p>
                  ) : (
                    ""
                  )}
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
      <AuthFooter />
    </div>
  );
};

export default AuthLayout;
