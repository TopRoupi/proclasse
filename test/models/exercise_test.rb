# == Schema Information
#
# Table name: exercises
#
#  id         :uuid             not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  task_id    :uuid             not null
#
# Indexes
#
#  index_exercises_on_task_id  (task_id)
#
# Foreign Keys
#
#  fk_rails_...  (task_id => tasks.id)
#
require "test_helper"

class ExerciseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
