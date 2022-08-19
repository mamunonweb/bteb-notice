import { onMount, onCleanup } from 'solid-js'

export default function onScrollBottom(
  handler: () => void,
  bottom = window.innerHeight
) {
  function handleWindowScroll() {
    const currentScroll = window.scrollY + window.innerHeight
    if (document.body.scrollHeight - currentScroll < bottom) {
      handler()
    }
  }

  onMount(() => window.addEventListener('scroll', handleWindowScroll))
  onCleanup(() => window.removeEventListener('scroll', handleWindowScroll))
}
