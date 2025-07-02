import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Mail, Send } from "lucide-react";

const NewsletterCard = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Subscribed successfully!");
    console.log("Newsletter signup data:", data);
    reset();
  };

  return (
    <div className="w-full px-4 py-10 flex justify-center items-center">
      <div className="card max-w-md w-full bg-base-200 shadow-xl rounded-2xl p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Join Our Newsletter</h2>
          <p className="text-sm text-gray-500 mt-1">
            Get updates on the latest articles and resources.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="grow "
            />
          </label>
          {errors.email && (
            <p className="text-error text-sm -mt-2">{errors.email.message}</p>
          )}

          <button type="submit" className="btn btn-primary w-full gap-2">
            Subscribe
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterCard;
