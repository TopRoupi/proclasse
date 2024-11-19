# == Schema Information
#
# Table name: students
#
#  id         :uuid             not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :uuid             not null
#
# Indexes
#
#  index_students_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Student < ApplicationRecord
  belongs_to :user
  has_many :room_requests
  has_many :rooms, through: :room_requests
  has_many :rooms, -> { where(room_requests: {accepted: true}) }, through: :room_requests

  # def accepted_rooms
  #   rooms.joins(:room_requests).where(room_requests: {accepted: true, student_id: id})
  # end
end
