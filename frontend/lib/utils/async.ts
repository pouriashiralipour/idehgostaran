/**
 * Awaits `promise` but guarantees at least `minimumMs` elapses before
 * resolving.
 *
 * Needed for the manual top-loading-bar triggers on form submit: right
 * now `onSubmitPhone`/`onSubmitOtp` resolve almost instantly (they're
 * mocked with `console.log`, no real network call yet), so without
 * this the bar would start and finish within a single frame — visually
 * indistinguishable from nothing happening. Once real API calls are
 * wired in, this simply becomes a no-op floor under the real request
 * time and can stay in place.
 */
export async function withMinimumDuration<T>(
  promise: Promise<T>,
  minimumMs = 400
): Promise<T> {
  const [result] = await Promise.all([
    promise,
    new Promise(resolve => setTimeout(resolve, minimumMs)),
  ]);
  return result;
}
