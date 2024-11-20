# == Schema Information
#
# Table name: steps
#
#  id           :uuid             not null, primary key
#  index        :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  challenge_id :uuid             not null
#  exercise_id  :uuid             not null
#
# Indexes
#
#  index_steps_on_challenge_id  (challenge_id)
#  index_steps_on_exercise_id   (exercise_id)
#
# Foreign Keys
#
#  fk_rails_...  (challenge_id => challenges.id)
#  fk_rails_...  (exercise_id => exercises.id)
#
class Step < ApplicationRecord
  belongs_to :exercise
end
