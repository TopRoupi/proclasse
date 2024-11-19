# == Schema Information
#
# Table name: tasks
#
#  id           :uuid             not null, primary key
#  due_date     :date
#  published_at :date
#  weight       :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Task < ApplicationRecord
end
