class ApplicationForm < Superform::Rails::Form
  include Phlex::Rails::Helpers::Pluralize

  # Redefining the base Field class lets us override every field component.
  class Field < Superform::Rails::Form::Field
    @@classes = "input input-bordered shadow-sm focus:outline-none focus:border-2 shadow-inner"

    def input(**attributes)
      attributes[:class] =  @@classes
      super(**attributes)
    end

    def select(*values, **attributes)
      attributes[:class] =  @@classes
      super(*values, **attributes)
    end
  end

  def labeled(component, label = component.field.key.capitalize)
    render(
      component.field.label(class: "mt-2 form-control w-full") {
        div(class: "label") {
          span(class: "label-text") {
            plain label
            plain " *" if component.instance_variable_get(:@attributes)[:required]
          }
        }
        if block_given?
          yield
        else
          render component
        end
      }
    )
  end

  def row(component)
    div do
      render component.field.label(style: "display: block;")
      render component
    end
  end

  def error_messages
    if model.errors.any?
      div(style: "color: red;") do
        h2 { "#{pluralize model.errors.count, "error"} prohibited this post from being saved:" }
        ul do
          model.errors.each do |error|
            li { error.full_message }
          end
        end
      end
    end
  end
end
