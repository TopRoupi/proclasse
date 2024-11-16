# frozen_string_literal: true

class SessionCardComponent < ApplicationComponent
  attr_reader :title

  def initialize(title:)
    @title = title
  end

  def view_template
    section(class: "m-auto max-w-md p-10 border border-black/10 rounded-lg shadow-md") {
      h1(class: "text-3xl font-semibold text-center mb-6") { title }
      yield
    }
  end
end
