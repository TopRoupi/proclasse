# frozen_string_literal: true

class ChallengeCardComponent < ApplicationComponent
  include Phlex::Rails::Helpers::LinkTo

  attr_reader :challenge

  def initialize(challenge)
    @challenge = challenge
  end

  def view_template
    Card(
      :base_100,
      class: "flex flex-row items-center justify-between mt-4 w-full shadow-md border border-black/10 px-4 py-2",
    ) { |card|
      p { challenge.title }
      link_to("Mostrar", challenge_path(challenge))
    }
  end
end
