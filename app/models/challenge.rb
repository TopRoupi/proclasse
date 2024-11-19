# == Schema Information
#
# Table name: challenges
#
#  id         :uuid             not null, primary key
#  difficulty :integer
#  problem    :text
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  step_id    :uuid             not null
#  user_id    :uuid             not null
#
# Indexes
#
#  index_challenges_on_step_id  (step_id)
#  index_challenges_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (step_id => steps.id)
#  fk_rails_...  (user_id => users.id)
#
class Challenge < ApplicationRecord
  belongs_to :step
  belongs_to :user
end
