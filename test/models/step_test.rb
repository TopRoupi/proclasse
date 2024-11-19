# == Schema Information
#
# Table name: steps
#
#  id          :uuid             not null, primary key
#  index       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  exercise_id :uuid             not null
#
# Indexes
#
#  index_steps_on_exercise_id  (exercise_id)
#
# Foreign Keys
#
#  fk_rails_...  (exercise_id => exercises.id)
#
require "test_helper"

class StepTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
