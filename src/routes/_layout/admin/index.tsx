import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/admin/')({
  component: () => <div>Hello /_layout/admin/!</div>,
})
