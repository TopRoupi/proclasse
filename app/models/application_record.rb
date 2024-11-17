class ApplicationRecord < ActiveRecord::Base
  include CableReady::Updatable
  include CableReady::Broadcaster

  self.implicit_order_column = "created_at"

  primary_abstract_class
end
