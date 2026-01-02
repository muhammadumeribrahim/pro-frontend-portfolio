import { Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="font-semibold tracking-tight">Quick info</p>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <p className="flex items-center gap-2">
              <Mail size={16} />
              <a
                className="font-medium hover:underline"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> {profile.location}
            </p>
            <p className="text-slate-600">
              Want the fastest contact? Email me with your role + timeline.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="font-semibold tracking-tight">Message</p>
          <p className="mt-2 text-sm text-slate-600">
            This form uses <span className="font-medium">mailto</span> by default. If you want a real
            form that delivers to your inbox, connect Formspree/Web3Forms and replace the action.
          </p>

          <form
            className="mt-6 grid gap-4"
            action={`mailto:${profile.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-2 sm:grid-cols-2">
              <label className="grid gap-1 text-sm">
                <span className="text-slate-700">Name</span>
                <input
                  name="name"
                  className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-300"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-1 text-sm">
                <span className="text-slate-700">Email</span>
                <input
                  name="email"
                  type="email"
                  className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-300"
                  placeholder="name@email.com"
                />
              </label>
            </div>

            <label className="grid gap-1 text-sm">
              <span className="text-slate-700">Message</span>
              <textarea
                name="message"
                className="min-h-[140px] rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-slate-300"
                placeholder="Tell me what you're hiring for (role, timeline, what you liked in my projects)."
              />
            </label>

            <button
              type="submit"
              className="inline-flex h-11 w-fit items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
