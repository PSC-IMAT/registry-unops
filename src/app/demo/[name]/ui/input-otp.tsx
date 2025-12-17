import { Heading } from "@/registry/onu/ui/heading";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/onu/ui/input-otp";

export const inputOtp = {
  name: "input-otp",
  components: {
    InputOTPDemo: (
      <div className="flex flex-col gap-3 items-center justify-center mx-auto">
        <Heading level="h2" className="mb-4 text-center">
          OTP Input Example
        </Heading>

        <InputOTP
          className=""
          maxLength={6}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    ),
  },
};
