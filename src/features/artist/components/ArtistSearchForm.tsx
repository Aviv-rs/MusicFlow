import { useTranslation } from "react-i18next";
import { useForm } from "@tanstack/react-form";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { Search } from "lucide-react";

export const ArtistSearchForm = ({
  query,
  className,
  onSubmit,
}: {
  query?: string;
  className?: string;
  onSubmit: (query: string) => void;
}) => {
  const { t } = useTranslation();

  const formSchema = z.object({
    query: z.string().min(1),
  });
  const formFields = [
    {
      name: "query",
      defaultValue: "",
      type: "text",
      required: true,
      placeholder: t("search.queryPlaceholder"),
      label: t("search.queryLabel"),
      className: "flex-1 w-full min-w-10rem",
    },
  ] as const;

  const form = useForm({
    validators: {
      onChange: formSchema,
      onSubmitAsync: async ({ value: formValues }) => {
        onSubmit(formValues.query);
        return null;
      },
    },
    defaultValues: {
      query: query || "",
    },
  });

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        form.handleSubmit();
      }}
      className={cn("flex gap-4 w-full", className)}
    >
      <FieldGroup className="flex-1 flex-row">
        {formFields.map((formField) => {
          return (
            <form.Field
              name={formField.name}
              key={formField.name}
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      {t(`search.${field.name}Label`)}
                      {formField.required && (
                        <span className="text-destructive"> *</span>
                      )}
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      type={formField.type}
                      aria-invalid={isInvalid}
                      placeholder={formField.placeholder}
                      className={formField.className}
                    />
                  </Field>
                );
              }}
            />
          );
        })}
      </FieldGroup>

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button
            size="lg"
            disabled={!canSubmit}
            isLoading={isSubmitting}
            type="submit"
            className="basis-1/5"
          >
            <span className="hidden sm:block">{t("search.searchButton")}</span>
            <Search className="size-4" />
          </Button>
        )}
      />
    </form>
  );
};
