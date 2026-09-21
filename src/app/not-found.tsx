import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center gap-6 py-32 text-center">
      <p className="text-caption font-semibold uppercase tracking-wide text-muted">404</p>
      <h1 className="text-display-lg font-bold text-brand-ink">Page not found.</h1>
      <p className="max-w-md text-body-lg text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Button href="/" variant="primary">
        Back to home
      </Button>
    </Container>
  );
}
