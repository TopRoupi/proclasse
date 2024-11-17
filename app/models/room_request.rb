# == Schema Information
#
# Table name: room_requests
#
#  id         :uuid             not null, primary key
#  accepted   :boolean          default(FALSE), not null
#  identifier :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  room_id    :uuid             not null
#  student_id :uuid             not null
#
# Indexes
#
#  index_room_requests_on_room_id                 (room_id)
#  index_room_requests_on_room_id_and_identifier  (room_id,identifier) UNIQUE
#  index_room_requests_on_student_id              (student_id)
#
# Foreign Keys
#
#  fk_rails_...  (room_id => rooms.id)
#  fk_rails_...  (student_id => students.id)
#
class RoomRequest < ApplicationRecord
  belongs_to :room
  belongs_to :student

  validates :identifier, presence: true, length: { minimum: 9, maximum: 9}, uniqueness: { scope: :room_id }
end
